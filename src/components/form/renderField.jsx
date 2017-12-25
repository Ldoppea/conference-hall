/* eslint-disable react/prop-types */
import React from 'react'
import PlacesAutocomplete from 'react-places-autocomplete'

import Toggle from './toggle'
import { DayPicker, DayRangePicker } from './dayPicker'

import Label from './label'

const renderField = component => ({
  input, label, type, meta, autoFocus,
}) => (
  <Label name={input.name} label={label} error={meta.error}>
    {component === 'address' && (
      <PlacesAutocomplete inputProps={input} styles={{ autocompleteContainer: { zIndex: 1 } }} />
    )}
    {component === 'input' && (
      <input {...input} id={input.name} type={type} autoFocus={autoFocus} />
    )}
    {component === 'textarea' && (
      <textarea id={input.name} {...input} autoFocus={autoFocus}>
        {input.value}
      </textarea>
    )}
    {component === 'dayPicker' && <DayPicker id={input.name} {...input} autoFocus={autoFocus} />}
    {component === 'dayRangePicker' && (
      <DayRangePicker id={input.name} {...input} autoFocus={autoFocus} />
    )}
    {component === 'toggle' && <Toggle {...input} name={input.name} />}
  </Label>
)

export default renderField