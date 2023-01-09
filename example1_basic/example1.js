import React from 'react'
import { Form, Field } from 'react-final-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const showResults = async values => {
  await sleep(500) // simulate server latency
  window.alert(JSON.stringify(values, undefined, 2))
}

const required = value => (value ? undefined : 'Required')

const App = () => (
    
<div>
<h1> React Final Form</h1>
<Form onSubmit={showResults} >
{ ({ handleSubmit, values, submitting }) => (<form onSubmit={handleSubmit}>
<div>
    <label>First Name</label>
    <Field name="FirstName"
        component = "input"
        placeholder="First Name"
        validate= {required} >

        {fieldState => (
            <pre>{JSON.stringify(fieldState, undefined, 2)}</pre>
        )
        }

    </Field>
</div>

<div>
<label>Last Name</label>
<Field
    name="lastName"
    component="input"
    placeholder="Last Name"
    validate = {required} />
</div>

<div>
<label>Email</label>
<Field
    name="email"
    component="input"
    placeholder="Email" />
</div>

<button type="submit" disabled={submitting}> Submit </button>
</form>
)}
</Form>
</div>
)

export default App