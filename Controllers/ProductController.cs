using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ReactCrudWasan.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ReactCrudWasan.Controllers
{
    //[Route("api/[controller]")]
    public class ProductController : Controller
    {
        DataAccess prod = new DataAccess();

        [HttpGet]
        [Route("api/Product/Index")]
        public IEnumerable<ProductModel> Index()
        {
            return prod.GetAllProducts();
        }

        [HttpPost]
        [Route("api/Product/Create")]
        public int Create(ProductModel product)
        {
            return prod.CreateProduct(product);
        }

        [HttpGet]
        [Route("api/Product/Details/{id}")]
        public ProductModel Details(int id)
        {
            return prod.GetProductData(id);
        }

        [HttpPut]
        [Route("api/Product/Edit")]
        public int Edit(ProductModel product)
        {
            return prod.UpdateProduct(product);
        }

        [HttpDelete]
        [Route("api/Product/Delete/{id}")]
        public int Delete(int id)
        {
            return prod.DeleteProduct(id);
        }

    }
}
