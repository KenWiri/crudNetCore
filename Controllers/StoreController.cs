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
    public class StoreController : Controller
    {
        DataAccess storeObject = new DataAccess();

        [HttpGet]
        [Route("api/Store/Index")]
        public IEnumerable<StoreModel> Index()
        {
            return storeObject.GetAllStores();
        }

        [HttpPost]
        [Route("api/Store/Create")]
        public int Create(StoreModel store)
        {
            return storeObject.CreateStore(store);
        }

        [HttpGet]
        [Route("api/store/Details/{id}")]
        public StoreModel Details(int id)
        {
            return storeObject.GetStoreData(id);
        }

        [HttpPut]
        [Route("api/Store/Edit")]
        public int Edit(StoreModel store)
        {
            return storeObject.UpdateStore(store);
        }

        [HttpDelete]
        [Route("api/Store/Delete/{id}")]
        public int Delete(int id)
        {
            return storeObject.DeleteStore(id);
        }


    }
}

