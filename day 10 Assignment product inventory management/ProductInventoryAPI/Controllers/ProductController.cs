using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

[Route("api/products")]
[ApiController]
public class ProductsController : ControllerBase
{
    private static List<Product> Products = new List<Product>();

    [HttpGet]
    public IActionResult GetProducts()
    {
        return Ok(Products);
    }

    [HttpPost]
    public IActionResult AddProduct([FromBody] Product product)
    {
        if (string.IsNullOrWhiteSpace(product.Name) || product.Price <= 0)
            return BadRequest("Invalid product details.");

        product.Id = Products.Count + 1;
        Products.Add(product);
        return Ok(product);
    }

    [HttpPut("{id}")]
    public IActionResult UpdateProduct(int id, [FromBody] Product updatedProduct)
    {
        var product = Products.FirstOrDefault(p => p.Id == id);
        if (product == null) return NotFound("Product not found.");

        product.Name = updatedProduct.Name;
        product.Price = updatedProduct.Price;
        return Ok(product);
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteProduct(int id)
    {
        var product = Products.FirstOrDefault(p => p.Id == id);
        if (product == null) return NotFound("Product not found.");

        Products.Remove(product);
        return Ok("Product deleted.");
    }
}

// ✅ FIX: Added default value for 'Name' to avoid CS8618 error
public class Product
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty; // Fix: Prevents CS8618 error
    public decimal Price { get; set; }
}