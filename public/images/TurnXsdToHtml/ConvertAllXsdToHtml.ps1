$scriptpath = $MyInvocation.MyCommand.Path
$executionFolder = Split-Path $scriptpath
$executionFolder = $executionFolder + "\"

$stylesheet = $executionFolder + "xs3p.xsl"
$Exe = $executionFolder + "msxsl.exe"

#Function to Convert XSD files to HTML
function Run-MsXsl ($XsdFile)
{
    "Converting file: " + $XsdFile
    $HtmlFile = $XsdFile + "_Docuementation.html"
    "To: " + $HtmlFile
    & $Exe $XsdFile $stylesheet -o $HtmlFile
}

#Print execution folder
"Execution folder is: $executionFolder"

#Get XSD files in folder
$fileEntries = [IO.Directory]::GetFiles($executionFolder, "*.xsd");

#Convert each file
foreach($fileName in $fileEntries) 
{ 
    Run-MsXsl($fileName); 
}  
