namespace MmaArenasApi.DatabaseSettings
{
    public class MmaArenaDatabaseSettings: IMmaArenaDatabaseSettings
    {
        public string MmaArenaCollectionName {get; set;}
        public string ConnectionString {get; set;}
        public string DatabaseName {get; set;}
    }
    public interface IMmaArenaDatabaseSettings
    {
        string MmaArenaCollectionName {get; set;}
        string ConnectionString {get; set;}
        string DatabaseName {get; set;}
    }
}