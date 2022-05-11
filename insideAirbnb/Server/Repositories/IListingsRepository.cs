﻿using insideAirbnb.Shared;
using Microsoft.AspNetCore.Mvc;

namespace insideAirbnb.Server.Repositories
{
    public interface IListingsRepository
    {
        Task<List<ListingsSummarized>> getSummarizedListings();
    }
}
