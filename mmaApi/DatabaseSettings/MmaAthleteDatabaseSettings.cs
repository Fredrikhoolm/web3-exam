namespace MmaAthletesApi.DatabaseSettings
{
    public class MmaAthleteDatabaseSettings: IMmaAthleteDatabaseSettings
    {
        public string MmaAthleteCollectionName {get; set;}
        
        public string ConnectionString {get; set;}
        public string DatabaseName {get; set;}
    }
    public interface IMmaAthleteDatabaseSettings
    {
        string MmaAthleteCollectionName {get; set;}
        string ConnectionString {get; set;}
        string DatabaseName {get; set;}
    }

}