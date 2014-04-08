

folder_path = "/Users/14zy/Sites/painter-show/11"
i = 0
Dir.glob(folder_path + "/*").sort.each do |f|
  i += 1
  filename = File.basename(f, File.extname(f))
  File.rename(f, folder_path + "/" + i.to_s + File.extname(f))
end
