```bash
#match eveything
[^]*
```

```bash
#match hello / Hello then anything after
[hH]ello[^]*
```

```bash
#match eveything then 3 digits then anything then 3 digits then dash then 4 digitsr
[^]*\d{3}[^]*\d{3}-\d{4}
```