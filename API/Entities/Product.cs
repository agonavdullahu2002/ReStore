
namespace API.Entities
{
    public class Product
    {
        public int Id { get; set; } = default!;
        public string Name { get; set; } = default!;

        public string Description { get; set; } = default!;
    
        public long Price { get; set; } = default!;

        public string PictureUrl { get; set; } = default!;

        public string Type { get; set; } = default!;

        public string Brand { get; set; } = default!;

        public int QuantityInStock { get; set; } = default!;
    }
}