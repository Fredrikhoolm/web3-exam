namespace MmaAthletesApi.Interfaces
{
    public interface IMmaArena
    {
        string Id {get; set;}
        string Name {get; set;}
        string Image {get; set;}

        string Capacity {get; set;}
    }
}