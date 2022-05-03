﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace insideAirbnb.Server
{
    public partial class insideAirbnbContext : DbContext
    {
        public insideAirbnbContext()
        {
        }

        public insideAirbnbContext(DbContextOptions<insideAirbnbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Listings> Listings { get; set; }
        public virtual DbSet<Neighbourhoods> Neighbourhoods { get; set; }
        public virtual DbSet<Reviews> Reviews { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseCollation("SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Listings>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("listings");

                entity.Property(e => e.Availability365).HasColumnName("availability_365");

                entity.Property(e => e.CalculatedHostListingsCount).HasColumnName("calculated_host_listings_count");

                entity.Property(e => e.HostId).HasColumnName("host_id");

                entity.Property(e => e.HostName)
                    .IsRequired()
                    .IsUnicode(false)
                    .HasColumnName("host_name");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.LastReview)
                    .HasColumnType("date")
                    .HasColumnName("last_review");

                entity.Property(e => e.Latitude).HasColumnName("latitude");

                entity.Property(e => e.License)
                    .IsUnicode(false)
                    .HasColumnName("license");

                entity.Property(e => e.Longitude).HasColumnName("longitude");

                entity.Property(e => e.MinimumNights).HasColumnName("minimum_nights");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .IsUnicode(false)
                    .HasColumnName("name");

                entity.Property(e => e.Neighbourhood)
                    .IsRequired()
                    .IsUnicode(false)
                    .HasColumnName("neighbourhood");

                entity.Property(e => e.NeighbourhoodGroup).HasColumnName("neighbourhood_group");

                entity.Property(e => e.NumberOfReviews).HasColumnName("number_of_reviews");

                entity.Property(e => e.NumberOfReviewsLtm).HasColumnName("number_of_reviews_ltm");

                entity.Property(e => e.Price).HasColumnName("price");

                entity.Property(e => e.ReviewsPerMonth).HasColumnName("reviews_per_month");

                entity.Property(e => e.RoomType)
                    .IsRequired()
                    .IsUnicode(false)
                    .HasColumnName("room_type");
            });

            modelBuilder.Entity<Neighbourhoods>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("neighbourhoods");

                entity.Property(e => e.Neighbourhood)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("neighbourhood");

                entity.Property(e => e.NeighbourhoodGroup)
                    .HasMaxLength(1)
                    .HasColumnName("neighbourhood_group");
            });

            modelBuilder.Entity<Reviews>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("reviews");

                entity.Property(e => e.Date)
                    .HasColumnType("date")
                    .HasColumnName("date");

                entity.Property(e => e.ListingId).HasColumnName("listing_id");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}