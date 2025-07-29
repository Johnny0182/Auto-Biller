"use server";

import { redirect } from 'next/navigation';

import { Invoices } from '@/db/schema';
import { db } from '@/db'

export async function createAction(formData: FormData) {
  const value = Math.floor(parseFloat(String(formData.get('value'))) * 100)
  console.log('value:', value);
  const description = formData.get('description') as string;

  const results = await db.insert(Invoices)
  .values({
    value,
    description,
    status: 'open'
  })
  .returning({
    id: Invoices.id
  })
    redirect(`/invoices/${results[0].id}`)
}
  //next thing we are working on is sending user to 
  // to a new page after the invoice submit button is pressed
  //('Form submitted!'); 1:05:20
  
  // Log all the form fields
  //const name = formData.get('name');
  //const email = formData.get('email');
  //const value = formData.get('value');
  //const description = formData.get('description') as string;
  //console.log('Name:', name);
  //console.log('Email:', email);
  //console.log('Value:', value);
  //console.log('Description:', description);
  
  //const parsedValue = Math.floor(parseFloat(String(value)) * 100);
  //console.log('Parsed value:', parsedValue);