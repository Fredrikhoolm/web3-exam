using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MmaAthletesApi.Interfaces;

namespace MmaAthletesApi.Models
{
    public class MmaAthlete : IMmaAthlete
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id {get; set;}
        
        [BsonElement("Name")]
        public string Name {get; set;}
        public string Image {get; set;}
        public string Age {get; set;}
        public string Nationality {get; set;}
        public string Record {get; set;}
        public string Style {get; set;}
        public string Division {get; set;}
        public string Nickname {get; set;}
    }
}