# Country list
plugin for create list of country

## Getting Started

1. Download the [latest release](https://github.com/koterion/cntr/releases/latest)

2. Include the stylesheet
  ```html
    <link rel="stylesheet" href="path/to/cntr.min.css">
  ```

4. Add the plugin script and initialise it on your input element

```html
    <input type="tel" class="phone">
    
    <script src="//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="path/to/cntr.min.js"></script>
    <script>
    $(".phone").cntr();
    </script>
  ```
  ## Demo and Examples
  
  [Cntr Plugin Demo](https://koterion.github.io/cntr/)

  ## Options
  
**select** 
Type: `Boolean` Default: `false` 
  
Custom select
```html
    <div class="phone"></div>
    
    <script>
      $(".phone").cntr({select:true});
    </script>
```
    
  **flag** 
  Type: `Boolean` Default: `false` 
  
Creates block with current flag on the left of input.  
  
```html
    <input type="tel" class="phone">
    
    <script>
      $(".phone").cntr({flag:true});
    </script>
```

  **flags** 
  Type: `Boolean` Default: `false` 
  
For all country add flag in list
```html
    <input type="tel" class="phone">
    
    <script>
      $(".phone").cntr({flags:true});
    </script>
```

  **search** 
  Type: `Boolean` Default: `false` 
  
Custom select with input for search
```html
    <input type="text" class="phone">
    
    <script>
      $(".phone").cntr({search:true});
    </script>
```

If you want automatic select country, add `data-current` with current country in ISO format

Automatically creates `<input type="hidden" name="country">` and paste current country.
