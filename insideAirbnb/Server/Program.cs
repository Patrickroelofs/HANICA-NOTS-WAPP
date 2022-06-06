using insideAirbnb.Shared;
using insideAirbnb.Server.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Identity.Web;
using insideAirbnb.Server.Cache;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers().AddNewtonsoftJson();

builder.Services.AddRazorPages();
builder.Services.AddDbContext<insideAirbnbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
        .AddMicrosoftIdentityWebApi(options =>
        {
            builder.Configuration.Bind("AzureAd", options);
            options.TokenValidationParameters.RoleClaimType =
                "http://schemas.microsoft.com/ws/2008/06/identity/claims/role";
        },
        options => { builder.Configuration.Bind("AzureAd", options); });

builder.Services.AddStackExchangeRedisCache(options =>
{
    options.Configuration = builder.Configuration.GetConnectionString("RedisConnection");
});

builder.Services.AddScoped<INeighbourhoodsRepository, NeighbourhoodsRepository>();
builder.Services.AddScoped<IListingsRepository, ListingRepository>();
builder.Services.AddScoped<IReviewRepository, ReviewRepository>();
builder.Services.AddScoped<ICalendarRepository, CalendarRepository>();

builder.Services.AddSingleton<IResponseCacheService, ResponseCacheService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseWebAssemblyDebugging();
}
else
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();

    app.Use(async (context, next) =>
    {
        context.Response.Headers.Add("X-Content-Type-Options", "nosniff");
        // context.Response.Headers.Add("Cache-Control", "no-cache, no-store, must-revalidate");
        context.Response.Headers.Add("X-Frame-Options", "SAMEORIGIN");
        context.Response.Headers.Add("Content-Security-Policy",
            "default-src 'self' 'unsafe-inline' 'unsafe-eval' https://api.mapbox.com https://events.mapbox.com https://login.microsoftonline.com; " 
            + "script-src 'self' 'sha256-v8v3RKRPmN4odZ1CWM5gw80QKPCCWMcpNeOmimNL2AA=' 'unsafe-eval' https://api.mapbox.com https://code.jquery.com https://cdn.jsdelivr.net blob: data:; "
            + "style-src 'self' https://api.mapbox.com; "
            + "img-src 'self' 'unsafe-inline' blob: data:; frame-ancestors 'none'; form-action 'none';");

        await next();
    });
}

app.UseHttpsRedirection();

app.UseBlazorFrameworkFiles();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.MapRazorPages();
app.MapControllers();
app.MapFallbackToFile("index.html");

app.Run();
