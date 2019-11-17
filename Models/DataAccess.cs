using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactCrudWasan.Models
{
    public class DataAccess
    {
        WasanStoreDbContext db = new WasanStoreDbContext();

        //PRODUCT
        public IEnumerable<ProductModel> GetAllProducts()
        {
            try
            {
                return db.Product.ToList();
            }
            catch
            {
                throw;
            }
        }
   
        //To create new product   
        public int CreateProduct(ProductModel product)
        {
            try
            {
                db.Product.Add(product);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To update(edit) details of a product  
        public int UpdateProduct(ProductModel product)
        {
            try
            {
                db.Entry(product).State = EntityState.Modified;
                db.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get the details of a particular product  
        public ProductModel GetProductData(int id)
        {
            try
            {
                ProductModel product = db.Product.Find(id);
                return product;
            }
            catch
            {
                throw;
            }
        }

        //To delete a chosen product by id
        public int DeleteProduct(int id)
        {
            try
            {
                ProductModel prd = db.Product.Find(id);
                db.Product.Remove(prd);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }




        //STORE
        public IEnumerable<StoreModel> GetAllStores()
        {
            try
            {
                return db.Store.ToList();
            }
            catch
            {
                throw;
            }
        }

        //To create a new store  
        public int CreateStore(StoreModel store)
        {
            try
            {
                db.Store.Add(store);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To update details of a particular stroe
        public int UpdateStore(StoreModel store)
        {
            try
            {
                db.Entry(store).State = EntityState.Modified;
                db.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get the details of a particular store  
        public StoreModel GetStoreData(int id)
        {
            try
            {
                StoreModel store = db.Store.Find(id);
                return store;
            }
            catch
            {
                throw;
            }
        }

        //To Delete the record of a particular store  
        public int DeleteStore(int id)
        {
            try
            {
                StoreModel str = db.Store.Find(id);
                db.Store.Remove(str);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }



        //CUSTOMER
        public IEnumerable<CustomerModel> GetAllCustomers()
        {
            try
            {
                return db.Customer.ToList();
            }
            catch
            {
                throw;
            }
        }

        //To create a new customer  
        public int CreateCustomer(CustomerModel customer)
        {
            try
            {
                db.Customer.Add(customer);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //CUSTOMER
        public int UpdateCustomer(CustomerModel customer)
        {
            try
            {
                db.Entry(customer).State = EntityState.Modified;
                db.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get the details of a particular customer  
        public CustomerModel GetCustomerData(int id)
        {
            try
            {
                CustomerModel customer = db.Customer.Find(id);
                return customer;
            }
            catch
            {
                throw;
            }
        }

        //To delete a chosen customer by id 
        public int DeleteCustomer(int id)
        {
            try
            {
                CustomerModel cust = db.Customer.Find(id);
                db.Customer.Remove(cust);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        
        //SALES
        public IEnumerable<SalesModel> GetAllSales()
        {
            try
            {
                return db.Sales.ToList();
            }
            catch
            {
                throw;
            }
        }

        //To create a new sale item 
        public int CreateSale(SalesModel sale)
        {
            try
            {
                db.Sales.Add(sale);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Update the records of a particluar sale  
        public int UpdateSale(SalesModel sale)
        {
            try
            {
                db.Entry(sale).State = EntityState.Modified;
                db.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get the details of a particular sale  
        public SalesModel GetSaleData(int id)
        {
            try
            {
                SalesModel sale = db.Sales.Find(id);
                return sale;
            }
            catch
            {
                throw;
            }
        }

        //To Delete the record of a particular sale  
        public int DeleteSale(int id)
        {
            try
            {
                SalesModel sold = db.Sales.Find(id);
                db.Sales.Remove(sold);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To retrieve the list of CustomerName  
        public List<CustomerModel> GetCustomer()
        {
            List<CustomerModel> listOfCustomer = new List<CustomerModel>();
            listOfCustomer = (from CustomerList in db.Customer select CustomerList).ToList();

            return listOfCustomer;
        }

        //To retrieve the list of CustomerName  
        public List<StoreModel> GetStore()
        {
            List<StoreModel> listOfStore = new List<StoreModel>();
            listOfStore = (from StoreList in db.Store select StoreList).ToList();

            return listOfStore;
        }

        //To retrieve the list of CustomerName  
        public List<ProductModel> GetProduct()
        {
            List<ProductModel> listOfProduct = new List<ProductModel>();
            listOfProduct = (from ProductList in db.Product select ProductList).ToList();

            return listOfProduct;
        }

    }
}
