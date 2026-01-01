<script lang="ts">
    export let name: String;
    export let description: String;
    export let hue: String;

    function getColor(){
        if (hue === "white"){
            return "bg-neutral-50";
        } else if (hue === "yellow"){
            return "bg-amber-400";
        } else if (hue === "red"){
            return "bg-red-500";
        }
    }
</script>
<!-- 
<div class = "{getColor()}">
    {name}{description}
    <slot></slot>
</div>

<div class="card w-96 {getColor()} card-md shadow-sm">
  <div class="card-body">
    <h2 class="flex items-center justify-center">{name}</h2>
  </div>
</div> -->

<div class="drawer drawer-end">
  <input id="my-drawer-5" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <!-- Page content here -->
    <label for="my-drawer-5" class="drawer-button btn btn-primary">Open drawer</label>
  </div>
  <div class="drawer-side">
    <label for="my-drawer-5" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu bg-base-200 min-h-full w-80 p-4">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
