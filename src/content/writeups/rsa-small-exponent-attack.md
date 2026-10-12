---
title: "Breaking RSA: Small Exponent Attack Explained"
date: "2024-06-10"
tags: ["Cryptography", "RSA", "Math", "Dev"]
category: "Write-up"
difficulty: "Hard"
excerpt: "A deep dive into the RSA small public exponent attack (e=3), with mathematical proofs and practical exploit code."
---

# Breaking RSA: Small Exponent Attack

## Background

RSA encryption with a small public exponent (e=3) is vulnerable when the same message is encrypted for multiple recipients without padding.

## The Math

Given:
- `c = m^e mod n` where `e = 3`
- Three ciphertexts `c1, c2, c3` with moduli `n1, n2, n3`

By **Chinese Remainder Theorem (CRT)**:

```
c ≡ c1 (mod n1)
c ≡ c2 (mod n2)  
c ≡ c3 (mod n3)
```

We can compute `C = m^3` directly over integers, then take the cube root.

## Implementation

```python
from sympy.ntheory.modular import crt
from gmpy2 import iroot

# Given values
n1, n2, n3 = ...  # Three different moduli
c1, c2, c3 = ...  # Three ciphertexts of same message

# CRT to find m^3
moduli = [n1, n2, n3]
remainders = [c1, c2, c3]

result, _ = crt(moduli, remainders)

# Take cube root
m, exact = iroot(result, 3)
if exact:
    print(bytes.fromhex(hex(m)[2:]).decode())
```

## Defense

Always use **OAEP padding** with RSA. Never reuse messages without randomized padding.

```python
from Crypto.PublicKey import RSA
from Crypto.Cipher import PKCS1_OAEP

# Correct usage
key = RSA.generate(2048)
cipher = PKCS1_OAEP.new(key)
ciphertext = cipher.encrypt(b"secret message")
```
