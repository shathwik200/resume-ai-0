
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
    
    // Create a clone of the element to make layout adjustments before export
    const clone = resumeElement.cloneNode(true) as HTMLElement;
    
    // Apply the transformation for PDF export
    clone.style.transform = "scale(1)"; // Remove any scaling
    clone.style.width = "794px"; // A4 width at 96 DPI
    clone.style.height = "1123px"; // A4 height at 96 DPI
    clone.style.position = "absolute";
    clone.style.top = "-9999px";
    clone.style.left = "-9999px";
    clone.style.backgroundColor = "#ffffff";
    
    // Apply 4px vertical offset to non-text elements
    const nonTextElements = clone.querySelectorAll("div, span, img, svg, hr");
    nonTextElements.forEach((element) => {
      // Skip elements that only contain text nodes (no child elements)
      if (element.childNodes.length === 1 && element.childNodes[0].nodeType === Node.TEXT_NODE) {
        return;
      }
      
      const el = element as HTMLElement;
      const currentTransform = el.style.transform || "";
      el.style.transform = currentTransform + " translateY(4px)";
    });
    
    document.body.appendChild(clone);
    
    const canvas = await html2canvas(clone, {
      scale: 2, // Higher scale for better quality
      useCORS: true,
      logging: false,
      backgroundColor: "#ffffff",
    });
    
    document.body.removeChild(clone);
    
    const imgData = canvas.toDataURL("image/png");
    
    // Standard US Letter size in points (8.5 x 11 inches)
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: [612, 792] // Standard US Letter size in points
    });
    
    pdf.addImage(imgData, "PNG", 0, 0, 612, 792);
    pdf.save(`${filename}.pdf`);
    
    toast.success("PDF downloaded successfully!");
  } catch (error) {
    console.error("Error exporting PDF:", error);
    toast.error("Failed to export PDF. Please try again.");
  }
};
