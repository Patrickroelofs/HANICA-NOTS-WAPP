using insideAirbnb.Client;
using insideAirbnb.Client.Account;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Authentication;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

builder.Services.AddHttpClient("Api", client => client.BaseAddress = new Uri(builder.HostEnvironment.BaseAddress)).AddHttpMessageHandler<BaseAddressAuthorizationMessageHandler>();

builder.Services.AddScoped(sp => sp.GetRequiredService<IHttpClientFactory>().CreateClient("insideAirbnb.ServerAPI"));

builder.Services.AddMsalAuthentication<RemoteAuthenticationState, SecureUserAccount>(options =>
{
    builder.Configuration.Bind("AzureAd", options.ProviderOptions.Authentication);
    options.ProviderOptions.DefaultAccessTokenScopes.Add("api://3f9c6447-6c55-4bc2-b1e7-cfcce93a402c/insideAirbnbPJL");
    options.UserOptions.RoleClaim = "appRole";
})
    .AddAccountClaimsPrincipalFactory<RemoteAuthenticationState, SecureUserAccount, SecureAccountFactory>();

await builder.Build().RunAsync();
