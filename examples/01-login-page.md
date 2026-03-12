# Example: Login Page

**Prompt:** `/bytedesign a login page with email and password fields, a remember me checkbox, forgot password link, and social login options for Google and GitHub`

**Output:**

```
╔══════════════════════════════════════════════════════════════════╗
║                                                                  ║
║                         ┌──────────┐                             ║
║                         │  🔷 Logo │                             ║
║                         └──────────┘                             ║
║                                                                  ║
║                    Welcome back to AppName                       ║
║                  Sign in to your account                         ║
║                                                                  ║
║              ┌────────────────────────────────┐                  ║
║              │                                │                  ║
║              │  Email                         │                  ║
║              │  [____________________________]│                  ║
║              │                                │                  ║
║              │  Password                      │                  ║
║              │  [____________________________]│                  ║
║              │                                │                  ║
║              │  [x] Remember me    Forgot pw? │                  ║
║              │                                │                  ║
║              │  [        Sign In            ] │                  ║
║              │                                │                  ║
║              │  ──────── or continue with ─── │                  ║
║              │                                │                  ║
║              │  [ G  Sign in with Google    ] │                  ║
║              │  [ ⌥  Sign in with GitHub    ] │                  ║
║              │                                │                  ║
║              │  Don't have an account?        │                  ║
║              │  Sign up →                     │                  ║
║              │                                │                  ║
║              └────────────────────────────────┘                  ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
```

**📐 Design Summary**
- Centered card layout on full-page background
- Clear visual hierarchy: Logo → Title → Form → Social login → Sign up CTA
- Single-column form for simplicity

**🔗 Interaction Notes**
- `Sign In` button submits the form → navigates to dashboard on success
- `Forgot pw?` link → opens password reset page
- Social buttons → trigger OAuth flow for Google/GitHub
- `Sign up →` link → navigates to registration page
- `Remember me` checkbox persists session

**Export JSON (abbreviated):**
```json
{
  "name": "Login Page",
  "platform": "web",
  "layout": {
    "type": "flex-column",
    "align": "center",
    "justify": "center",
    "minHeight": "100vh",
    "children": [
      { "id": "logo", "type": "image" },
      { "id": "title", "type": "heading", "text": "Welcome back to AppName" },
      { "id": "subtitle", "type": "text", "text": "Sign in to your account" },
      {
        "id": "login-card",
        "type": "card",
        "children": [
          { "id": "email", "type": "input", "label": "Email", "inputType": "email" },
          { "id": "password", "type": "input", "label": "Password", "inputType": "password" },
          {
            "id": "options-row",
            "type": "flex-row",
            "justify": "space-between",
            "children": [
              { "id": "remember", "type": "checkbox", "label": "Remember me" },
              { "id": "forgot", "type": "link", "text": "Forgot password?", "action": "navigate", "target": "/forgot-password" }
            ]
          },
          { "id": "submit", "type": "button", "text": "Sign In", "variant": "primary", "action": "submit-form" },
          { "id": "divider", "type": "divider", "text": "or continue with" },
          { "id": "google-btn", "type": "button", "text": "Sign in with Google", "variant": "outline", "action": "oauth", "provider": "google" },
          { "id": "github-btn", "type": "button", "text": "Sign in with GitHub", "variant": "outline", "action": "oauth", "provider": "github" },
          { "id": "signup-link", "type": "link", "text": "Don't have an account? Sign up", "action": "navigate", "target": "/signup" }
        ]
      }
    ]
  }
}
```
