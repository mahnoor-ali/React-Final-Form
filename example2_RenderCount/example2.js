
import React from 'react'
import { Form, Field, FormSpy } from 'react-final-form'
import createDecorator from 'final-form-focus'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const showResults = async values => {
  await sleep(500) // simulate server latency
  window.alert(JSON.stringify(values, undefined, 2))
}

const focusOnError = createDecorator()
const required = value => (value ? undefined : 'Required')
const App = () => (
  <div>
<h1> React Final Form</h1>

<Form onSubmit={showResults} >
{ ({ handleSubmit, values, submitting }) =>  (<form onSubmit={handleSubmit}>

<Field name="firstName" placeholder="First Name" validate= {required} >
{({input, meta, placeholder }) => (
    <div className={ meta.active? 'active': ''}>
     <label>First Name</label>
    <input {...input} placeholder={placeholder}/>
    {meta.error && meta.touched && <span>{meta.error}</span>} 
</div>
)}
</Field> 

<Field name="lastName" placeholder="Last Name" validate= {required} >
{({input, meta, placeholder }) => (
    <div className={ meta.active? 'active': ''}>
     <label>Last Name</label>
    <input {...input} placeholder={placeholder}/>
    {meta.error && meta.touched && <span>{meta.error}</span>} 
</div>
)}
</Field>


<Field name="email" placeholder="Email" validate= {required} >
{({input, meta, placeholder }) => (
    <div className={ meta.active? 'active': ''}>
     <label>Email</label>
    <input {...input} placeholder={placeholder}/>
    {meta.error && meta.touched && <span>{meta.error}</span>} 
</div>
)}
</Field>

<button type="submit" disabled={submitting}> Submit </button>
<pre> {JSON.stringify(values, undefined, 2)}</pre>
</form>
)}
</Form>
</div>
)

export default App