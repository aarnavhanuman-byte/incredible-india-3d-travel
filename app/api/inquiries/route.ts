import { NextResponse } from 'next/server';
import { z } from 'zod';

const inquirySchema = z.object({
  destination: z.string().min(1),
  startCity: z.string().optional().default(''),
  travelDate: z.string().min(1),
  travelers: z.string().min(1),
  nights: z.string().min(1),
  hotelPreference: z.string().min(1),
  transport: z.string().min(1),
  budget: z.string().min(1),
  specialRequirements: z.string().optional().default(''),
  fullName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const payload = inquirySchema.parse(body);

    return NextResponse.json({
      success: true,
      message: 'Inquiry received. Our travel team will contact you shortly.',
      data: payload,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || 'Invalid inquiry payload.' },
      { status: 400 }
    );
  }
}
