using MmaAthletesApi.Models;
using MmaAthletesApi.DatabaseSettings;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace MmaAthletesApi.Services
{
    public class MmaArenaService
    {
        private readonly IMongoCollection<MmaArena> _mmaArenas;

        public MmaArenaService(IMmaArenaDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _mmaArenas = database.GetCollection<MmaArena>(settings.MmaArenaCollectionName);
        }

        public List<MmaArena> Get()
        {
            return _mmaArenas.Find( mmaArena => true).ToList();
        }

        public MmaArena Get(string id) =>
            _mmaArenas.Find<MmaArena>(mmaArena => mmaArena.Id == id).FirstOrDefault();


        public MmaArena Create(MmaArena newMmaArena)
        {
            _mmaArenas.InsertOne(newMmaArena);
            return newMmaArena;
        }

    }
}
