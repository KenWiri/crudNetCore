﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using ReactCrudWasan.Models;

namespace ReactCrudWasan.Migrations
{
    [DbContext(typeof(WasanStoreDbContext))]
    partial class WasanStoreDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("ReactCrudWasan.Models.CustomerModel", b =>
                {
                    b.Property<int>("CustomerId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("CustomerAddress")
                        .IsRequired();

                    b.Property<string>("CustomerName")
                        .IsRequired();

                    b.HasKey("CustomerId");

                    b.ToTable("Customer");
                });

            modelBuilder.Entity("ReactCrudWasan.Models.ProductModel", b =>
                {
                    b.Property<int>("ProductId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ProductName")
                        .IsRequired();

                    b.Property<string>("ProductPrice")
                        .IsRequired();

                    b.HasKey("ProductId");

                    b.ToTable("Product");
                });

            modelBuilder.Entity("ReactCrudWasan.Models.SalesModel", b =>
                {
                    b.Property<int>("SalesId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("CustomerModelCustomerId");

                    b.Property<string>("CustomerName")
                        .IsRequired();

                    b.Property<DateTime>("DateSold")
                        .HasColumnType("Date");

                    b.Property<int?>("ProductModelProductId");

                    b.Property<string>("ProductName")
                        .IsRequired();

                    b.Property<int?>("StoreModelStoreId");

                    b.Property<string>("StoreName")
                        .IsRequired();

                    b.HasKey("SalesId");

                    b.HasIndex("CustomerModelCustomerId");

                    b.HasIndex("ProductModelProductId");

                    b.HasIndex("StoreModelStoreId");

                    b.ToTable("Sales");
                });

            modelBuilder.Entity("ReactCrudWasan.Models.StoreModel", b =>
                {
                    b.Property<int>("StoreId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("StoreAddress")
                        .IsRequired();

                    b.Property<string>("StoreName")
                        .IsRequired();

                    b.HasKey("StoreId");

                    b.ToTable("Store");
                });

            modelBuilder.Entity("ReactCrudWasan.Models.SalesModel", b =>
                {
                    b.HasOne("ReactCrudWasan.Models.CustomerModel", "CustomerModel")
                        .WithMany("SalesModels")
                        .HasForeignKey("CustomerModelCustomerId");

                    b.HasOne("ReactCrudWasan.Models.ProductModel", "ProductModel")
                        .WithMany("SalesModels")
                        .HasForeignKey("ProductModelProductId");

                    b.HasOne("ReactCrudWasan.Models.StoreModel", "StoreModel")
                        .WithMany("SalesModels")
                        .HasForeignKey("StoreModelStoreId");
                });
#pragma warning restore 612, 618
        }
    }
}
