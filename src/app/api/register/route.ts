import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function POST(req: Request) {
  try {

    const body = await req.json();
    console.log("BODY:", body);
    const { nombre, email, area, mensaje } = body;
    if (!nombre || !email) {
      return NextResponse.json(
        { error: 'Datos incompletos' },
        { status: 400 }
      );
    }

    console.log("BODY:", body);
console.log("DB_HOST:", process.env.DB_HOST);

    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: Number(process.env.DB_PORT)
    });

    await connection.execute(
      `INSERT INTO contactos (nombre, email, area, mensaje)
       VALUES (?, ?, ?, ?)`,
      [nombre, email, area, mensaje]
    );

    await connection.end();

    return NextResponse.json({ ok: true });

  } catch (error) {
    console.error("ERROR COMPLETO:", error);
  return NextResponse.json(
    { error: 'Error en el servidor' },
    { status: 500 }
  );
  }
}