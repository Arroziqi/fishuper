import ResponseScreen from "@/components/ResponseScreen";

export default function SubmissionSuccessful() {
  return (
    <ResponseScreen
      title={"PENGAJUAN BERHASIL"}
      description={
        "Tunjukkan barcode kepada kurir. Informasi terkait penjemputan akan dikirim melalui WhatsApp Anda"
      }
    />
  );
}
