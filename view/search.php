<div class = "row">
    <div class = "col-12">
        <form>
            <div class="form-group">
                <label for="search"></label>
                <input type="search" class="form-control" id="search" aria-describedby="searchHelp" placeholder="<?php echo $strings->searchPlaceholder; ?>">
                <small id="searchHelp" class="form-text text-muted"><?php echo $strings->searchHelp; ?></small>
            </div>
        </form>
    </div>
    <div class = "col-12">
        <ul id = "results">
        </ul>
    </div>
</div>