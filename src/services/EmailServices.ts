/**
 * Interface para los datos de la solicitud de asesoría
 */
export interface AsesoriaData {
  nombre_completo: string;
  correo_corporativo: string;
  empresa?: string;
  area_interes?: string;
  detalles?: string;
}

/**
 * Servicio para enviar notificaciones de asesoría a través del backend
 */
export async function sendNotificationEmail(data: AsesoriaData) {
  // El backend está configurado para usar nodemailer + brevo
  const BACKEND_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
  
  const response = await fetch(`${BACKEND_URL}/api/asesoria`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: response.statusText }));
    throw new Error(`Error al enviar la solicitud: ${errorData.message || errorData.error}`);
  }

  return await response.json();
}


