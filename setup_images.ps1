$ids = @("500ml", "1l", "5l")
$sourceDir = "liquid bottel"
$destBase = "public\images"

# Ensure directories exist (already made but good practice)
foreach ($id in $ids) {
    if (!(Test-Path "$destBase\$id")) {
        New-Item -ItemType Directory -Force -Path "$destBase\$id"
    }
}

for ($i = 1; $i -le 120; $i++) {
    $formattedNum = "{0:D3}" -f $i
    $sourceFile = "$sourceDir\ezgif-frame-$formattedNum.jpg"
    
    if (Test-Path $sourceFile) {
        foreach ($id in $ids) {
            $destFile = "$destBase\$id\$i.jpg"
            Copy-Item -Path $sourceFile -Destination $destFile -Force
        }
    } else {
        Write-Host "Warning: Source file $sourceFile not found."
    }
}

Write-Host "Images copied successfully."
