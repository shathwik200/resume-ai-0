
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { toast } from "sonner";

export const exportToPdf = async (filename = "resume") => {
  try {
    toast.info("Preparing your PDF...");
    
    const resumeElement = document.getElementById("resume-to-print");
    
    if (!resumeElement) {
      throw new Error("Resume element not found");
    }
    
    const canvas = await html2canvas(resumeElement, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: "#ffffff",
    });
    
    const imgData = canvas.toDataURL("image/png");
    
    // Standard US Letter size (8.5 x 11 inches)
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [canvas.width, canvas.height]
    });
    
    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save(`${filename}.pdf`);
    
    toast.success("PDF downloaded successfully!");
  } catch (error) {
    console.error("Error exporting PDF:", error);
    toast.error("Failed to export PDF. Please try again.");
  }
};
