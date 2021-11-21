using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MmaArenaApi.Interfaces;

namespace MmaArenaApi.Models
{
    public class MmaArena : IMmaArena
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id {get; set;}
        
        [BsonElement("Name")]
        public string Name {get; set;}
        public string Image {get; set;}
        public string Capacity {get; set;}
    }
}