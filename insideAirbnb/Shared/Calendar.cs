﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace insideAirbnb.Shared
{
    public partial class Calendar
    {
        public long ListingId { get; set; }
        public DateTime Date { get; set; }
        public string Available { get; set; }
        public string Price { get; set; }
        public string AdjustedPrice { get; set; }
        public int? MinimumNights { get; set; }
        public int? MaximumNights { get; set; }
    }
}