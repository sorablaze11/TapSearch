from rest_framework.decorators import api_view
from rest_framework.response import Response
import re


class Appearance:
    """
    Represents the appearance of a term in a given document, along with the
    frequency of appearances in the same one.
    """
    def __init__(self, docId, frequency):
        self.docId = docId
        self.frequency = frequency  

    def __repr__(self):
        """
        String representation of the Appearance object
        """
        return str(self.__dict__)


class Database:
    """
    In memory database representing the already indexed documents.
    """
    def __init__(self):
        self.db = dict()

    def __repr__(self):
        """
        String representation of the Database object
        """
        return str(self.__dict__)

    def get(self, id):
        return self.db.get(id, None)

    def add(self, document):
        """
        Adds a document to the DB.
        """
        return self.db.update({document['id']: document})

    def remove(self, document):
        """
        Removes document from DB.
        """
        return self.db.pop(document['id'], None)


class InvertedIndex:
    """
    Inverted Index class.
    """
    def __init__(self, db):
        self.index = dict()
        self.db = db

    def __repr__(self):
        """
        String representation of the Database object
        """
        return str(self.index)   

    def index_document(self, document):
        """
        Process a given document, save it to the DB and update the index.
        """
        # Remove punctuation from the text.
        clean_text = re.sub(r'[^\w\s]', '', document['text'])
        terms = re.split(' |\n', clean_text)
        appearances_dict = dict() 
        # Dictionary with each term and the frequency it appears in the text.
        for term in terms:
            term = term.lower()
            term_frequency = appearances_dict[term].frequency if term in appearances_dict else 0
            appearances_dict[term] = Appearance(document['id'], term_frequency + 1)

        # Update the inverted index
        update_dict = {key: [appearance]
                       if key not in self.index
                       else self.index[key] + [appearance]
                       for (key, appearance) in appearances_dict.items()}
        self.index.update(update_dict)        
        # Add the document into the database
        self.db.add(document)        
        return document

    def lookup_query(self, query):
        """
        Returns the dictionary of terms with their correspondent Appearances. 
        This is a very naive search since it will just split the terms and show
        the documents where they appear.
        """
        if query in self.index:
            result = []
            count = 0
            for x in self.index[query]:
                count += 1
                result.append([x.frequency, x.docId])
                if count == 10:
                    break
            return sorted(result, reverse=True)
        else:
            return []


# Global variables of the above created classes for storing inverted-indexes
db = Database()
index = InvertedIndex(db)
global_id = 0


@api_view(['GET', 'POST'])
def clear_indexes(request):
    global global_id, db, index
    global_id = 0
    db = Database()
    index = InvertedIndex(db)
    return Response({"mssg": "All the indexes has been cleared."})


@api_view(['GET', 'POST'])
def indexing_docs(request):
    global global_id, index
    try:
        docs = request.data['data']
        docs = docs.split('\n\n')
        print(docs)
        for par in docs:
            document = {
                'id': global_id,
                'text': par
            }
            index.index_document(document)
            global_id = global_id + 1
    except Exception as e:
        return Response({"status": 0})
    return Response({"status": 1})


@api_view(['GET', 'POST'])
def search_word(request):
    global index
    return Response({"docs": index.lookup_query(request.data['word'])})


@api_view(['GET'])
def get_document(request, id):
    global db
    if id not in db.db.keys():
        return Response({"text": ""})
    print(db.db[id])
    return Response({"text": db.db[id]['text']})


@api_view(['GET'])
def get_all(request):
    global db
    res = [[db.db[x]['id'], db.db[x]['text'][:20] + "..."] for x in db.db.keys()]
    return Response({"docs": res})