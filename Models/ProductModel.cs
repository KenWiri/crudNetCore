using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ReactCrudWasan.Models
{
    [Table("Product")]
    public class ProductModel
    {
        [Key]
        [Column(Order = 0)]
        public int ProductId { get; set; }
        [Required, Column(Order = 1)]
        public string ProductName { get; set; }
        [Required, Column(Order = 2)]
        public string ProductPrice { get; set; }
        public List<SalesModel> SalesModels { get; set; }
    }
}
