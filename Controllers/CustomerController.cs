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
    public class CustomerController : Controller
    {
        DataAccess cus = new DataAccess();

        // GET: api/<controller>
        [HttpGet]
        [Route("api/Customer/Index")]
        public IEnumerable<CustomerModel> Index()
        {
            return cus.GetAllCustomers();
        }

        [HttpPost]
        [Route("api/Customer/Create")]
        public int Create(CustomerModel customer)
        {
            return cus.CreateCustomer(customer);
        }

        [HttpGet]
        [Route("api/Customer/Details/{id}")]
        public CustomerModel Details(int id)
        {
            return cus.GetCustomerData(id);
        }

        [HttpPut]
        [Route("api/Customer/Edit/")]
        public int Edit(CustomerModel customer)
        {
            return cus.UpdateCustomer(customer);
        }

        [HttpDelete]
        [Route("api/Customer/Delete/{id}")]
        public int Delete(int id)
        {
            return cus.DeleteCustomer(id);
        }
    }
}