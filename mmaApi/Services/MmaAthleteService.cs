using MmaAthletesApi.Models;
using MmaAthletesApi.DatabaseSettings;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace MmaAthletesApi.Services
{
    public class MmaAthleteService
    {
        private readonly IMongoCollection<MmaAthlete> _mmaAthletes;

        public MmaAthleteService(IMmaAthleteDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _mmaAthletes = database.GetCollection<MmaAthlete>(settings.MmaAthleteCollectionName);
        }

        public List<MmaAthlete> Get()
        {
            return _mmaAthletes.Find( mmaAthlete => true).ToList();
        }

        public MmaAthlete Get(string id) =>
            _mmaAthletes.Find<MmaAthlete>(mmaAthlete => mmaAthlete.Id == id).FirstOrDefault();

        public MmaAthlete Create(MmaAthlete newMmaAthlete)
        {
            _mmaAthletes.InsertOne(newMmaAthlete);
            return newMmaAthlete;
        }

        public void Update(string id, MmaAthlete mmaAthleteIn) =>
            _mmaAthletes.ReplaceOne(mmaAthlete => mmaAthlete.Id == id, mmaAthleteIn);
        
        public void Remove(MmaAthlete mmaAthleteIn) =>
        _mmaAthletes.DeleteOne(mmaAthlete => mmaAthlete.Id == mmaAthleteIn.Id);

        public void Remove(string id) =>
        _mmaAthletes.DeleteOne(mmaAthlete => mmaAthlete.Id == id);
    }

    
}