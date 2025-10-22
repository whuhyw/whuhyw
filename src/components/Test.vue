<template>
    <div>
        <h1>
            <slot name="title"></slot>
        </h1>
    </div>
</template>

<style scoped>
div {
  display: block;
  margin-bottom: 1rem;
}

h1 {
    color:cyan;
    size: 10rem;
}
</style>