using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ReactCrudWasan.Models
{
   
        [Table("Customer")]
        public class CustomerModel
        {
            [Key, Column(Order = 0)]
            public int CustomerId { get; set; }
            [Required, Column(Order = 1)]
            public string CustomerName { get; set; }
            [Required, Column(Order = 2)]
            public string CustomerAddress { get; set; }

            public List<SalesModel> SalesModels { get; set; }
        }
}
