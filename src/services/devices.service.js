import { supabase } from './supabase'

export async function getDevices() {
  const { data, error } = await supabase
    .from('devices')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error

  return data
}

export async function createDevice(device) {
  const { data, error } = await supabase
    .from('devices')
    .insert([device])
    .select()

  if (error) throw error

  return data
}