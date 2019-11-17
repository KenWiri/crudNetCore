using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ReactCrudWasan.Models
{
    [Table("Sales")]
    public class SalesModel
    {
        [Key, Column(Order = 0)]
        public int SalesId { get; set; }
        [Required, Column(Order = 1)]
        public string ProductName { get; set; }
        [Required, Column(Order = 2)]
        public string CustomerName { get; set; }
        [Required, Column(Order = 3)]
        public string StoreName { get; set; }
        [DataType(DataType.Date)]
        [Required, Column(Order = 4, TypeName = "Date")]
        public DateTime DateSold { get; set; }

        public CustomerModel CustomerModel { get; set; }

        public ProductModel ProductModel { get; set; }

        public StoreModel StoreModel { get; set; }

    }
}