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
    public class SalesController : Controller
    {
        DataAccess sale = new DataAccess();

        // GET: api/<controller>
        [HttpGet]
        [Route("api/Sales/Index")]
        public IEnumerable<SalesModel> Index()
        {
            return sale.GetAllSales();
        }

        [HttpPost]
        [Route("api/Sales/Create")]
        public int Create(SalesModel sales)
        {
            return sale.CreateSale(sales);
        }

        [HttpGet]
        [Route("api/Sales/Details/{id}")]
        public SalesModel Details(int id)
        {
            return sale.GetSaleData(id);
        }

        [HttpPut]
        [Route("api/Sales/Edit")]
        public int Edit(SalesModel sales)
        {
            return sale.UpdateSale(sales);
        }

        [HttpDelete]
        [Route("api/Sales/Delete/{id}")]
        public int Delete(int id)
        {
            return sale.DeleteSale(id);
        }

        [HttpGet]
        [Route("api/Store/GetStoreName")]
        public IEnumerable<StoreModel> DetailsStoreName()
        {
            return sale.GetStore();
        }

        [HttpGet]
        [Route("api/Product/GetProductName")]
        public IEnumerable<ProductModel> DetailsProductName()
        {
            return sale.GetProduct();
        }

        [HttpGet]
        [Route("api/Customer/GetCustomerName")]
        public IEnumerable<CustomerModel> DetailCustomerName()
        {
            return sale.GetCustomer();
        }
    }
}