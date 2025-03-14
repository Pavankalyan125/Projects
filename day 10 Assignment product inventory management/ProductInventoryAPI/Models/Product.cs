namespace ProductInventoryAPI.Models  // ✅ Must match AppDbContext.cs
{
    using System.ComponentModel.DataAnnotations.Schema;

public class Product
{
    public int Id { get; set; }
    public required string Name { get; set; }

    [Column(TypeName = "decimal(18,2)")]  // ✅ Explicitly set precision
    public decimal Price { get; set; }
}
}