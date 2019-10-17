---
title: Wanderlust
date: 2019-08-27T18:44:24.217Z
tags: 'travel, philosophy, hobby'
---
Sed ut perspiciatis unde omnis iste natus error sit voluptatem #accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 

## Heading 1

![](/assets/brett-jordan-1329359-unsplash.jpg)

## Heading 2

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 

```
navigator.serviceWorker.register('/sw.js').then(reg => {
  reg.onupdatefound = () => {
    const w = reg.installing;
    w.onstatechange = () => {
      if (w.state === 'installed' && navigator.serviceWorker.controller) {
        // probably best to avoid reloading if someone has clicked
        if (hasInteracted) showUpdateToast();
        
        location.reload();
      }
    };
  };
});

// if you want the bit on line 7
let hasInteracted = false;
addEventListener('click', () => { hasInteracted = true; });
```

Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
