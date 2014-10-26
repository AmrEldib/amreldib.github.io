require "rexml/document"
require 'time'
require 'yaml'
  
# An importer that takes a blogger archive and creates jekyll files for it

def dumpEntries(doc)
	doc.elements.each("feed/entry") do |item|
		title=item.elements["title"].text
		name = title.downcase.gsub(/[^a-z0-9]+/i, '-')
		timestamp = Time.parse(item.elements["published"].text)
		arrayCategories = item.elements["category"].to_a
		categories = item.elements.to_a("category").select{ |e| e.attributes["scheme"] == "http://www.blogger.com/atom/ns#"}.map { |element| element.attributes["term"] }
		#keywords = "[" + categories.join(",") + "]"
		filename = "D:/Amr/Work/SourceCode/amreldib.github.io/_posts/#{timestamp.strftime("%Y-%m-%d")}-#{name}.html"
		content=item.elements["content"].text
		puts("#{title} -> #{filename}")
		dumpFile(filename,name,title,timestamp,categories,content)
	end
end

def dumpFile(filename, name, title, timestamp,keywords,content)
	File.open(filename, "w") do |f|
    	YAML.dump({
			"layout" => "post",
            "name" => name,
            "title" => title,
            "time" => timestamp,
            "tags" => keywords
        }, f)
		f.puts "---\n#{content}"
	end
end

content = ""
open("D:/Amr/Work/SourceCode/amreldib.github.io/AmrBlog.xml", "r") { |f| content << f.read }
doc = REXML::Document.new(content)
dumpEntries(doc)