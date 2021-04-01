<template>
  <div class="v-form-item">
    <label v-if="label" class="v-form-item__label">{{ label }}</label>
    <div class="v-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Schema from 'async-validator'

export default {
  name: 'v-form-item',
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  methods: {
    validate() {
      const rules = this.form.rules[this.prop]
      if (rules) {
        const value = this.form.formData[this.prop]
        const descriptor = { [this.prop]: rules }
        const schema = new Schema(descriptor)
        return new Promise((resolve, reject) => {
          schema.validate(
            {
              [this.prop]: value
            },
            errors => {
              !errors ? resolve() : reject(errors)
            }
          )
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.v-form-item {
  display: flex;
  align-items: center;
  padding: 26px 20px;
  border: 1px solid #ccc;
  background: #fff;
  margin: 20px 0;
  border-radius: 8px;
}

.v-form-item__label {
  color: #666;
  font-size: 32px;
  padding-right: 20px;
}

.v-form-item__content {
  flex: 1;

  > div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
}
</style>
