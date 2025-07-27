"use server";

import { Invoices } from '@/db/schema';
import { db } from '@/db'

export async function createAction(formData: FormData) {
  console.log('Form submitted!');
  
  // Log all the form fields
  const name = formData.get('name');
  const email = formData.get('email');
  const value = formData.get('value');
  const description = formData.get('description') as string;
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Value:', value);
  console.log('Description:', description);
  
  const parsedValue = Math.floor(parseFloat(String(value)) * 100);
  console.log('Parsed value:', parsedValue);
}