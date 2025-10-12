
/**
 * Utility functions for printing the sacred calendar
 */

/**
 * Prepares the calendar for printing by applying print-specific styles
 */
export const preparePrint = () => {
  // Create a style element for print-specific styles
  const printStyle = document.createElement("style");
  printStyle.id = "print-styles";
  printStyle.innerHTML = `
    @media print {
      body {
        background: white !important;
        color: black !important;
      }
      
      .print-only {
        display: block !important;
      }
      
      .no-print {
        display: none !important;
      }
      
      .print-container {
        width: 100% !important;
        max-width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
      }
      
      .print-page-break {
        page-break-before: always;
      }
      
      .print-event {
        break-inside: avoid;
        margin-bottom: 8px !important;
      }
      
      /* Reset background colors for better printing */
      .bg-gradient-to-b, .bg-gradient-to-br {
        background: white !important;
      }
      
      /* Ensure text is visible */
      .text-muted-foreground {
        color: #555 !important;
      }
      
      /* Adjust header for printing */
      .print-header {
        text-align: center;
        margin-bottom: 20px;
      }
      
      /* Force show all content */
      .overflow-hidden {
        overflow: visible !important;
      }
      
      /* Ensure borders are visible */
      * {
        border-color: #ddd !important;
      }
      
      /* Format event badges for print */
      .print-badge-newmoon {
        border: 1px solid #0077ff !important;
        color: #0077ff !important;
        padding: 2px 8px !important;
        border-radius: 4px !important;
        margin-left: 8px !important;
      }
      
      .print-badge-holyday {
        border: 1px solid #d97706 !important;
        color: #d97706 !important;
        padding: 2px 8px !important;
        border-radius: 4px !important;
        margin-left: 8px !important;
      }
      
      .print-badge-fast {
        border: 1px solid #9333ea !important;
        color: #9333ea !important;
        padding: 2px 8px !important;
        border-radius: 4px !important;
        margin-left: 8px !important;
      }
      
      /* Add page title and URL */
      @page {
        margin: 0.5in;
      }
      
      /* Fix table layout */
      table {
        width: 100% !important;
        border-collapse: collapse !important;
      }
      
      th, td {
        border: 1px solid #ddd !important;
        padding: 8px !important;
      }
    }
  `;
  
  document.head.appendChild(printStyle);
  
  // Trigger the print dialog
  window.print();
  
  // Remove the style element after printing
  setTimeout(() => {
    const element = document.getElementById("print-styles");
    if (element) {
      element.remove();
    }
  }, 1000);
};
