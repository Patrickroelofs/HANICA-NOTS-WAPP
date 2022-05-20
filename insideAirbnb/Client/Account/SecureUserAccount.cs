using Microsoft.AspNetCore.Components.WebAssembly.Authentication;
using System.Text.Json.Serialization;

namespace insideAirbnb.Client.Account
{
    public class SecureUserAccount : RemoteUserAccount
    {
        [JsonPropertyName("roles")]
        public string[] Roles { get; set; } = Array.Empty<string>();
    }
}
